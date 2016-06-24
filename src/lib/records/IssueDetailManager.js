import { Record } from 'immutable'

const _IssueDetailManager = Record({
  isTitleEditing: false,
  loading: false,
  showUsersModal: false,
  showLabelsModal: false,
})

export default class IssueDetailManager extends _IssueDetailManager {
  isValidTitle() {
    return this.title.length > 0
  }
  isValidContent() {
    return this.content.length > 0
  }
}
