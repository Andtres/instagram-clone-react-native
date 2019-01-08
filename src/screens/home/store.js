//Dependencies
import { connect } from 'react-redux'
//Actions
import postsActions from '../../redux/post/actions'

function mapStateToProps (store) {
  return {
		posts: store.post.posts ? store.post.posts : []
  }
}

const mapDispatchToProps = dispatch => ({
	getPosts: () => dispatch(postsActions.getPosts()),
	getUsers: () => dispatch(postsActions.getUsers()), 	
	getComments: () => dispatch(postsActions.getComments())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)
