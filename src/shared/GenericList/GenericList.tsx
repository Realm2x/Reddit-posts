import React from 'react';

interface IItem {
  id: string;
  text: React.ReactNode;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: React.ReactNode;
  other?: React.ReactNode;
  onClick?: () => {};
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({As = 'li', text, className, id, href, icon, other, onClick}) => (
        <As 
          className={className}
          key={id}
          href={href}
          onClick={() => console.log(id)}
        >
          {icon}
          {other}
          {text}
        </As>
      ))}
    </>
  );
}