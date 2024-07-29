interface TbBtnProps {
  isActive: boolean;
  onClick: () => void;
  //   children: JSX.Element[] | JSX.Element;
  children: string;
  style: Object;
}

const TabButton = ({ isActive, children, onClick }: TbBtnProps) => {
  const handletTbBtn = () => {
    onClick();
  };
  if (isActive) {
    return <strong style={{ margin: "16px 4px" }}>{children}</strong>;
  }
  return (
    <button
      onClick={handletTbBtn}
      style={{
        border: "none",
        color: "white",
        padding: "8px 24px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "8px 4px",
        cursor: "pointer",
        backgroundColor: " #008CBA",
      }}
    >
      {children}
    </button>
  );
};

export default TabButton;
