const If = ({ children, condition }) => {
  // 'If' komponenten tager 'children' og en 'condition' som props.
  return <>{condition && children}</>;
  // Returnerer 'children' kun, hvis 'condition' er sand; ellers returneres intet.
};

export default If; // Eksporterer If-komponenten til brug i andre dele af appen.
