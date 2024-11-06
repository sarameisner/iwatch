const If = ({ children, condition }) => {
  // 'If' komponenten tager 'children' og en 'condition' som props.
  return <>{condition && children}</>;
  // returnerer 'children' kun hvis 'condition' er sand; ellers returneres intet
};

export default If;
