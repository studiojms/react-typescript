import React from 'react';

interface TemplateProps {
  children: React.ReactElement;
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return <div>{children}</div>;
};

export default Template;
