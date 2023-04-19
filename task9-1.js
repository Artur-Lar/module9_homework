const xml = `<list>
              <student>
                <name lang="en">
                  <first>Ivan</first>
                  <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
              </student>
              <student>
                <name lang="ru">
                  <first>Петр</first>
                  <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
              </student>
            </list>`;

const parser = new DOMParser();
const xmlDocument = parser.parseFromString(xml, "text/xml");
const listNode = xmlDocument.getElementsByTagName("list");

const firstNameNode = nameNode.getElementsByTagName("first");
const lastNameNode = nameNode.getElementsByTagName("second");
const lang = nameNode.getAttribute("lang");
const age = ageNode.getElementsByTagName("age").textContent;
const prof = profNode.getElementsByTagName("prof").textContent;

const result = {
  first: firstNameNode.textContent,
  second: lastNameNode.textContent,
  lang: lang,
  age: age,
  prof: prof,
};
console.log(result);
