import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image, Thumbnail, Button} from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


const Comment = ({
  onChangeText,
  onCreateComment,
  comment,
}) => (
  <div>
    <h4>討論</h4>
    <Form horizontal>
    <Col xsOffset={1}>
      <FormGroup controlId="formBasicText">
        <FormControl style={{width: '80%'}} type= "text" value={comment.get('text')} onChange={onChangeText} placeholder="....."/>
        <FormControl.Feedback />
      </FormGroup>
     </Col>
    </Form>
    <Col xsOffset={10}>
     <Button bsStyle="success" onClick={onCreateComment}>送出</Button>
     </Col>
  </div>
);

export default Comment;