/*There is no rule for naming higher order component but
Mostly React developer name them start with -->`with<Name_of_you_want>*/
const withHOC = (WrappingComponent: any) => {
  return (props: any) => {
    //Add enhancement if need
    return <WrappingComponent {...props} />;
  };
};

export default withHOC;
