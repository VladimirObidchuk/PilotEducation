import { makeAutoObservable } from "mobx";

export default class CoursEducation {
  constructor() {
    this._courses = [
      { id: 1, name: "KPK" },
      { id: 2, name: "ATPL" },
      { id: 3, name: "CPL" },
    ];
    this._coursesControl = [
      { id: 1, name: "WorkBook" },
      { id: 2, name: "Self-testing" },
      { id: 3, name: "Exam" },
      { id: 4, name: "Statistic" },
    ];
    this._topic = [
      { id: 1, name: "Air", courseId: 1, parentId: null },
      { id: 2, name: "Construction", courseId: 2, parentId: null },
      { id: 3, name: "CRM", courseId: 1, parentId: null },
      { id: 4, name: "Communication", courseId: 3, parentId: 4 },
      { id: 5, name: "Aerodynamics", courseId: 2, parentId: 5 },
      { id: 6, name: "Humman community", courseId: 1, parentId: 3 },
      { id: 7, name: "UH-60", courseId: 1, parentId: 1 },
      { id: 8, name: "Mangust", courseId: 1, parentId: 7 },
      { id: 9, name: "Helocopter", courseId: 1, parentId: 6 },
      { id: 10, name: "Mango", courseId: 1, parentId: 7 },
      { id: 11, name: "Power", courseId: 1, parentId: 7 },
      { id: 12, name: "Power1", courseId: 1, parentId: 11 },
      { id: 13, name: "Power2", courseId: 1, parentId: 12 },
    ];
    this._topicInfo = [
      {
        id: 1,
        text: `id=1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil modi a libero, temporibus commodi illo dolor fuga repudiandae, cupiditate delectus, beatae corporis saepe distinctio! Deserunt, atque! Voluptates, recusandae alias.
      Odit esse iure pariatur nobis eos! Iusto provident quisquam magnam ullam eos sed ex delectus corporis, dolor atque esse optio dolore tempora sequi cum placeat fuga necessitatibus expedita nulla nam!
      Amet ducimus itaque fugit quidem praesentium nulla tenetur natus beatae, ut unde reiciendis aspernatur eius voluptatibus delectus dolor aliquam, rerum minima obcaecati. Impedit perferendis, in non unde dolor vel totam!
      Adipisci veniam, veritatis hic voluptatibus, impedit ut labore enim nemo iste possimus culpa assumenda ipsa doloremque quas nulla laboriosam. Excepturi possimus in exercitationem fuga deserunt natus voluptates iusto reprehenderit voluptatum?
      Perferendis in expedita quo nostrum. Explicabo facilis commodi enim nesciunt maxime nemo aliquam. Nobis quis culpa repellendus officiis doloremque quod perferendis repudiandae ducimus eligendi! Vero deleniti non cupiditate reiciendis in.`,
        image:
          "https://media.slovoidilo.ua/media/infographics/14/139998/inflyacziya-v-ukrayini_ru_large.jpg",
        topicId: 1,
      },
      {
        id: 2,
        text: `id=2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil modi a libero, temporibus commodi illo dolor fuga repudiandae, cupiditate delectus, beatae corporis saepe distinctio! Deserunt, atque! Voluptates, recusandae alias.
      Odit esse iure pariatur nobis eos! Iusto provident quisquam magnam ullam eos sed ex delectus corporis, dolor atque esse optio dolore tempora sequi cum placeat fuga necessitatibus expedita nulla nam!
      Amet ducimus itaque fugit quidem praesentium nulla tenetur natus beatae, ut unde reiciendis aspernatur eius voluptatibus delectus dolor aliquam, rerum minima obcaecati. Impedit perferendis, in non unde dolor vel totam!
      Adipisci veniam, veritatis hic voluptatibus, impedit ut labore enim nemo iste possimus culpa assumenda ipsa doloremque quas nulla laboriosam. Excepturi possimus in exercitationem fuga deserunt natus voluptates iusto reprehenderit voluptatum?
      Perferendis in expedita quo nostrum. Explicabo facilis commodi enim nesciunt maxime nemo aliquam. Nobis quis culpa repellendus officiis doloremque quod perferendis repudiandae ducimus eligendi! Vero deleniti non cupiditate reiciendis in.`,
        image:
          "https://media.slovoidilo.ua/media/infographics/14/139998/inflyacziya-v-ukrayini_ru_large.jpg",
        topicId: 3,
      },
      {
        id: 3,
        text: `id=3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil modi a libero, temporibus commodi illo dolor fuga repudiandae, cupiditate delectus, beatae corporis saepe distinctio! Deserunt, atque! Voluptates, recusandae alias.
      Odit esse iure pariatur nobis eos! Iusto provident quisquam magnam ullam eos sed ex delectus corporis, dolor atque esse optio dolore tempora sequi cum placeat fuga necessitatibus expedita nulla nam!
      Amet ducimus itaque fugit quidem praesentium nulla tenetur natus beatae, ut unde reiciendis aspernatur eius voluptatibus delectus dolor aliquam, rerum minima obcaecati. Impedit perferendis, in non unde dolor vel totam!
      Adipisci veniam, veritatis hic voluptatibus, impedit ut labore enim nemo iste possimus culpa assumenda ipsa doloremque quas nulla laboriosam. Excepturi possimus in exercitationem fuga deserunt natus voluptates iusto reprehenderit voluptatum?
      Perferendis in expedita quo nostrum. Explicabo facilis commodi enim nesciunt maxime nemo aliquam. Nobis quis culpa repellendus officiis doloremque quod perferendis repudiandae ducimus eligendi! Vero deleniti non cupiditate reiciendis in.`,
        image:
          "https://media.slovoidilo.ua/media/infographics/14/139998/inflyacziya-v-ukrayini_ru_large.jpg",
        topicId: 2,
        parentId: 3,
      },

      {
        id: 4,
        text: `id=4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil modi a libero, temporibus commodi illo dolor fuga repudiandae, cupiditate delectus, beatae corporis saepe distinctio! Deserunt, atque! Voluptates, recusandae alias.
      Odit esse iure pariatur nobis eos! Iusto provident quisquam magnam ullam eos sed ex delectus corporis, dolor atque esse optio dolore tempora sequi cum placeat fuga necessitatibus expedita nulla nam!
      Amet ducimus itaque fugit quidem praesentium nulla tenetur natus beatae, ut unde reiciendis aspernatur eius voluptatibus delectus dolor aliquam, rerum minima obcaecati. Impedit perferendis, in non unde dolor vel totam!
      Adipisci veniam, veritatis hic voluptatibus, impedit ut labore enim nemo iste possimus culpa assumenda ipsa doloremque quas nulla laboriosam. Excepturi possimus in exercitationem fuga deserunt natus voluptates iusto reprehenderit voluptatum?
      Perferendis in expedita quo nostrum. Explicabo facilis commodi enim nesciunt maxime nemo aliquam. Nobis quis culpa repellendus officiis doloremque quod perferendis repudiandae ducimus eligendi! Vero deleniti non cupiditate reiciendis in.`,
        image:
          "https://media.slovoidilo.ua/media/infographics/14/139998/inflyacziya-v-ukrayini_ru_large.jpg",
        topicId: 1,
      },
    ];
    this._questions = [
      {
        id: 1,
        name: "aerodynamics",
        img: "https://archive.rcopen.com/var/rcd/storage/images/articles/avia/basic_aerodyn/model/6642-1-rus-RU/model1.gif",
        answer: ["alsdnd", "dfmsdlf"],
      },
      {
        id: 2,
        name: "Construction",
        img: "https://archive.rcopen.com/var/rcd/storage/images/articles/avia/basic_aerodyn/model/6642-1-rus-RU/model1.gif",
        answer: ["sdfsdsdfsd", "sdfsd"],
      },
      {
        id: 3,
        name: "Communication",
        img: "https://archive.rcopen.com/var/rcd/storage/images/articles/avia/basic_aerodyn/model/6642-1-rus-RU/model1.gif",
        answer: ["sdfsd", "sdfsd"],
      },
      {
        id: 4,
        name: "CRM",
        img: "https://archive.rcopen.com/var/rcd/storage/images/articles/avia/basic_aerodyn/model/6642-1-rus-RU/model1.gif",
        answer: ["sdfsdfsdf", "sdfdsf"],
      },
    ];
    this._selectedCours = {};
    this._selectedCoursControl = {};
    this._selectedTopic = {};
    makeAutoObservable(this);
  }

  setCours(courses) {
    this._courses = courses;
  }
  setCoursControl(coursesControl) {
    this._coursesControl = coursesControl;
  }
  setTopic(topic) {
    this._topic = topic;
  }
  setQuestion(questions) {
    this._questions = questions;
  }
  setSelectedCours(cours) {
    this._selectedCours = cours;
  }
  setSelectedCoursControl(coursControl) {
    this._selectedCoursControl = coursControl;
  }
  setSelectedTopic(topic) {
    this._selectedTopic = topic;
  }
  setTopicInfo(topicInfo) {
    this._topicInfo = topicInfo;
  }

  get courses() {
    return this._courses;
  }
  get coursesControl() {
    return this._coursesControl;
  }
  get topic() {
    return this._topic;
  }
  get questions() {
    return this._questions;
  }
  get selectedCours() {
    return this._selectedCours;
  }
  get selectedCoursControl() {
    return this._selectedCoursControl;
  }
  get selectedTopic() {
    return this._selectedTopic;
  }
  get topicInfo() {
    return this._topicInfo;
  }
}
