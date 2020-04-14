import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';

interface TemplateProps {
  children: React.ReactElement;
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return (
    <div>
      <Menu attached="top" color="teal" inverted size="huge">
        <Menu.Item as="a" header>
          Project Name
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
      </Menu>
      <Segment>{children}</Segment>
    </div>
  );
};

export default Template;
