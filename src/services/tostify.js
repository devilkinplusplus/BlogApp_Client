import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

const ToastService = {
  success: (message, options) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      ...options,
    });
  },
  error: (message, options) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      ...options,
    });
  },
  warning: (message, options) => {
    toast.warning(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      ...options,
    });
  },
  info: (message, options) => {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      ...options,
    });
  },
};

export default ToastService;
