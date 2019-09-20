workflow "Add label to PR" {
  on = "pull_request"
  resolves = "PR Labeler"
}

action "PR opened filter" {
  uses = "actions/bin/filter@master"
  args = "action opened"
}

action "PR Labeler" {
  needs = "PR opened filter"
  uses = "TimonVS/pr-labeler@master"
  secrets = ["GITHUB_TOKEN"]
}