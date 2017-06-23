import Immutable from 'immutable';

// initstate model
export const UiState = Immutable.fromJS({
  spinnerVisible: false,
  isEdit: false,
});

export const PostState = Immutable.fromJS({
   posts: [],  
   post: {
    id: '',
    name: '', 
    description: '', 
    imagePath: '',     
  } 
});

export const UserState = Immutable.fromJS({
  username: '',
  email: '',
  password: '',
  isAuthorized: false,
});

export const CommentState = Immutable.fromJS({
  'comments': [],
  'comment': {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  }
});