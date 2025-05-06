import { Feedback } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItemAdmin = ({ name, response }: Feedback) => (
  <tr>
    <td>{name}</td>
    <td>{response}</td>
  </tr>
);

export default StuffItemAdmin;
