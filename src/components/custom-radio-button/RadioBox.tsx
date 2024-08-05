interface RadioBoxProps {
  children: React.ReactNode;
  className?: string;
}

const RadioBox = ({ children, className }: RadioBoxProps) => {
  return <div className={className}>{children}</div>;
};

export default RadioBox;
