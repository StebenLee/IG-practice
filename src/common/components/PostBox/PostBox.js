import React from 'react';
import { Grid, Row, Col, Image, Thumbnail, Button} from 'react-bootstrap';
/*
comments 
import CommentContainer from '../../containers/CommentContainer';
import CommentListContainer from '../../containers/CommentListContainer';
            <CommentContainer />
            <CommentListContainer />*/

const PostBox = (props)  => {
  return(
    <Grid>
    <Row >
      <Col xsOffset={1} xs={10}>
        <Thumbnail src={props.post.get('imagePath')} alt="480x270">
          <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>{props.post.get('name')}</h3>
          <p>{props.post.get('description')}</p>
          <Col xsOffset={10}>
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
        </Thumbnail>
      </Col>
      </Row>
    </Grid>

    );
}

export default PostBox;

