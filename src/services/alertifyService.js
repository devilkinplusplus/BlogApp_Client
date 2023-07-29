import 'alertifyjs/build/css/alertify.min.css';
import alertify from 'alertifyjs';

export const showSuccess = (message) => {
    alertify.notify(message, 'success', 5);
  };
  
  export const showError = (message) => {
    alertify.notify(message, 'error', 5); 
  };
  
  export const showWarning = (message) => {
    alertify.notify(message, 'warning', 5); 
  };

  export const confirmAlert = (title,message,success,error) => {
    alertify.confirm(title,message,success(),error())
  }
  
  export default alertify;