// components/ExampleDialog.js
import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/dialog/styles.css';

function ExampleDialog(props) {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <button className="btn-default" onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close} aria-label="test">
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Test Dialog 123</p>
      </Dialog>
    </div>
  );
}

export default ExampleDialog;
