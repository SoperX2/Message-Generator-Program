function randomMessage() {
  // This function generates a random message by combining three parts
  const messages = ["You", "We", "I"];

  const messages2 = ["can", "will", "shall"];

  const messages3 = [
    "´find love",
    "push forward",
    "learn to code",
    "become a better person",
    "make a difference",
  ];

  let randomValue1 = messages[Math.floor(Math.random() * messages.length)];
  let randomValue2 = messages2[Math.floor(Math.random() * messages2.length)];
  let randomValue3 = messages3[Math.floor(Math.random() * messages3.length)];
  return `${randomValue1} ${randomValue2} ${randomValue3}`;
}

console.log(randomMessage());
