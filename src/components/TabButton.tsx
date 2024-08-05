import "./TabButton.css";
interface TbBtnProps {
  isActive: boolean;
  onClick: () => void;
  //   children: JSX.Element[] | JSX.Element;
  children: string;
}

const TabButton = ({ isActive, children, onClick }: TbBtnProps) => {
  const handletTbBtn = () => {
    onClick();
  };
  if (isActive) {
    return <button className="active-tab">{children}</button>;
  }
  return (
    <button onClick={handletTbBtn} className="non-active-tab">
      {children}
    </button>
  );
};

export default TabButton;
