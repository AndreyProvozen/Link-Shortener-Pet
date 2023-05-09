import { SVGProps } from 'react';

const LogOut = (props?: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" {...props}>
    <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
  </svg>
);

export default LogOut;