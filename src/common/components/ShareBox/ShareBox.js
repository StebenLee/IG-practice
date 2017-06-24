import React from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import Dropzone from 'react-dropzone';
const ShareBox = (props) => {
  return (<div style = {{backgroundColor:"#ffffff"}}>
    <Form horizontal>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入標題</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter text"
          defaultValue={props.name}
          onChange={props.onChangeNameInput}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入內容</ControlLabel>
        <FormControl 
          componentClass="textarea" 
          placeholder="textarea" 
          defaultValue={props.description}          
          onChange={props.onChangeDescriptionInput}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入圖片網址</ControlLabel>
        <FormControl 
          type="text"
          placeholder="Enter text"
          defaultValue={props.imagePath}
          onChange={props.onChangeImageUrl}
        />
        <FormControl.Feedback />
      </FormGroup>
      <Button 
        onClick={props.onPostSubmit} 
        bsStyle="success" 
        bsSize="large" 
        block
      >
        提交送出
      </Button>
    </Form>
                <form className='join-form' ref='joinForm' autoComplete='off'>
            <Dropzone
                onDrop={this.onDrop}
                className='dropzone'
                activeClassName='active-dropzone'
                multiple={false}>
      <div>Drag and drop or click to select a 550x550px file to upload.</div>
    </Dropzone>

            {this.state.imageFiles.length > 0 ? <div>
    <h2>Uploading {this.state.imageFiles.length} files...</h2>
    <div>{this.state.imageFiles.map((file) => <img src={file.preview} /> )}</div>
    </div> : null}
        </form>
  </div>);
};

export default ShareBox;