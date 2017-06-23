import React from 'react';
import { Grid, Row, Col, Image, Thumbnail, Button} from 'react-bootstrap';
import CommentContainer from '../../containers/CommentContainer';
import CommentListContainer from '../../containers/CommentListContainer';


const PostBox = (props)  => {
  return(
    <Grid>
    <Row >
      <Col xsOffset={2} xs={7}>
        <Thumbnail src={props.post.get('imagePath')} alt="480x270">
          <h3>{props.post.get('name')}</h3>
          <p>{props.post.get('description')}</p>
          <Col xsOffset={9}>
          {
            props.isAuthorized === true ? (
            <p>
              <Button bsStyle="info" onClick={props.onUpadatePost(props.post.get('_id'))}>修改</Button>&nbsp;
              <Button bsStyle="primary" onClick={props.onDeletePost(props.post.get('_id'))}>刪除</Button>
            </p>
            )
            : null            
          }
          </Col>
            <CommentContainer />
            <CommentListContainer />
        </Thumbnail>
      </Col>
      </Row>
    </Grid>

    );
}

      //    data={data}
      //    actions={actions}
export default PostBox;

