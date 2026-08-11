function findTheOldest(people, currentYear = new Date().getFullYear()) {
  if (!people || people.length === 0) return undefined;

  const getAge = (person) => {
    const deathYear = person.yearOfDeath ?? currentYear;
    return deathYear - person.yearOfBirth;
  };

  return people.reduce((oldest, person) => {
    if (!oldest) return person;

    return getAge(person) > getAge(oldest) ? person : oldest;
  }, null);
}
// Do not edit below this line
module.exports = findTheOldest;
