//welcome message

const welcome = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;

  const displayFullName = () => {
    alert(`Welcome ${fullName}!`);
  };
  displayFullName();
};
