var n1 = prompt("Enter a noun");
var n2 = prompt("Enter a noun");
var pn1 = prompt("Enter a pronoun");
var pn2 = prompt("Enter a pronoun");
var v1 = prompt("Enter a verb");
var v2 = prompt("Enter a verb");
var av1 = prompt("Enter an adverb");
var av2 = prompt("Enter an adverb");
var p1 = prompt("Enter a preposition");
var p2 = prompt("Enter a preposition");
var a1 = prompt("Enter an adjective");
var a2 = prompt("Enter an adjective");
var c1 = prompt("Enter a conjunction");
var c2 = prompt("Enter a conjunction");
var i1 = prompt("Enter an interjection");
var i2 = prompt("Enter an interjection");

alert(
  madlib(n1, n2, pn1, pn2, v1, v2, av1, av2, p1, p2, a1, a2, c1, c2, i1, i2)
);

function madlib(
  noun1,
  noun2,
  pronoun1,
  pronoun2,
  verb1,
  verb2,
  adverb1,
  adverb2,
  preposition1,
  preposition2,
  adjective1,
  adjective2,
  conjunction1,
  conjunction2,
  interjection1,
  interjection2
) {
  return (
    "Once upon a time there was a(n) " +
    adjective1 +
    " wizard who wanted a friend. " +
    pronoun1 +
    " used their powers to bring a(n) " +
    adjective2 +
    " " +
    noun1 +
    " to life. The  wizard " +
    verb1 +
    "(ed) the " +
    noun1 +
    " and welcomed them to the world " +
    preposition1 +
    " a smile. The " +
    noun1 +
    " screamed " +
    interjection1 +
    ", then " +
    adverb1 +
    " " +
    verb2 +
    " and started throwing " +
    noun2 +
    "(s) all over the place. An innocent bystander yelled " +
    interjection2 +
    " " +
    conjunction1 +
    " Duck!! " +
    conjunction2 +
    " things like that. Then " +
    pronoun2 +
    " was immediately hit " +
    preposition2 +
    " a(n) " +
    noun2 +
    ". The " +
    adjective1 +
    " wizard " +
    adverb2 +
    " regretted their actions."
  );
}
