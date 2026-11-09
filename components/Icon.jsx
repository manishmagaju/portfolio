import { Github, Linkedin, Mail, Layout, Server, Database, Wrench } from "lucide-react";
const map = { github: Github, linkedin: Linkedin, mail: Mail, layout: Layout, server: Server, database: Database, wrench: Wrench };
export default function Icon({ name, ...props }) {
  const C = map[name] || Mail;
  return <C aria-hidden="true" {...props} />;
}
