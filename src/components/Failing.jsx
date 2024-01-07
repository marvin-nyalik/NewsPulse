import { useEffect } from "react";

const Failing = () => {
  useEffect(() => {
    throw new Error('Simulated error');
  },
  []);

  throw new Error('This error is from Failing component');  
}

export default Failing;
