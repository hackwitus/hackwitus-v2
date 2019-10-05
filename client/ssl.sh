#!/bin/bash

LETSENCRYPT_EMAIL="admin@hackwit.us"
DNSNAME="hackwit.us"

docker run -it --rm --name certbot \
    -v "$PWD/letsencrypt:/etc/letsencrypt" \
    -v "$PWD/lib/letsencrypt:/var/lib/letsencrypt" \
    certbot/certbot \
    certonly \
    -m $LETSENCRYPT_EMAIL \
    --manual \
    --preferred-challenges dns-01 \
    --no-eff-email \
    --manual-public-ip-logging-ok \
    --keep-until-expiring \
    --agree-tos \
    -d $DNSNAME \
    --server https://acme-v02.api.letsencrypt.org/directory