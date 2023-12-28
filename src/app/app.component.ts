import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'green_future_project';

  isWaste: boolean = false;
  randomWaste: any | undefined;

  isVisible: boolean = false;
  newWasteVisible: boolean = false;
  isDeleteWaste: boolean = false;
  isList: boolean = false;

  environmentalImpact = 'High';

  counterPlastic: number = 0;
  counterGlass: number = 0;
  counterOrganic: number = 0;
  counterEwaste: number = 0;
  counterMixed: number = 0;
  counterMetal: number = 0;
  counterPaper: number = 0;

  sum =
    this.counterEwaste +
    this.counterGlass +
    this.counterMetal +
    this.counterOrganic +
    this.counterPaper +
    this.counterPlastic +
    this.counterMixed;

  waste: any = [
    {
      id: '1',
      name: 'Dish',
      element: 'mixed',
    },
    {
      id: '2',
      name: 'Plastic bottle',
      element: 'plastic',
    },
    {
      id: '3',
      name: 'Beer bottle',
      element: 'glass',
    },
    {
      id: '4',
      name: 'Banana peel',
      element: 'organic',
    },
    {
      id: '5',
      name: 'Smartphone',
      element: 'e-waste',
    },
    {
      id: '6',
      name: 'Disposable wipes',
      element: 'mixed',
    },
    {
      id: '7',
      name: 'Toothbrush',
      element: 'plastic',
    },
    {
      id: '8',
      name: 'Latex gloves',
      element: 'mixed',
    },
    {
      id: '9',
      name: 'Aluminum',
      element: 'metal',
    },
    {
      id: '10',
      name: 'Silverware',
      element: 'metal',
    },
    {
      id: '11',
      name: 'Books',
      element: 'paper',
    },
    {
      id: '12',
      name: 'Glass jar',
      element: 'glass',
    },
    {
      id: '13',
      name: 'Fruit',
      element: 'organic',
    },
    {
      id: '14',
      name: 'Expired foods',
      element: 'organic',
    },
    {
      id: '15',
      name: 'Shopping bags',
      element: 'plastic',
    },
    {
      id: '16',
      name: 'Electrical equipment',
      element: 'e-waste',
    },
    {
      id: '17',
      name: 'Light bulbs',
      element: 'glass',
    },
    {
      id: '18',
      name: 'Greaseproof paper',
      element: 'mixed',
    },
    {
      id: '19',
      name: 'Crystal',
      element: 'mixed',
    },
    {
      id: '20',
      name: 'Diapers',
      element: 'mixed',
    },
  ];
  //Generate a random waste
  getRandomWaste() {
    this.isWaste = true;
    this.randomWaste =
      this.waste[Math.floor(Math.random() * this.waste.length)];
    console.log(this.sum);
  }
  //Close buttons options
  closeRandomWaste() {
    this.isWaste = false;
  }

  wasteArray: any = [];

  //Check the type of object and increase the counter and sum of the level
  throwWaste(selectedValue: string) {
    if (this.randomWaste.element === selectedValue) {
      this.wasteArray.push(this.randomWaste);
      switch (selectedValue) {
        case 'glass':
          this.counterGlass += 1;
          this.sum++;
          this.setLevel();
          break;
        case 'plastic':
          this.counterPlastic += 1;
          this.sum++;
          this.setLevel();
          break;
        case 'organic':
          this.counterOrganic += 1;
          this.sum++;
          this.setLevel();
          break;
        case 'e-waste':
          this.counterEwaste += 1;
          this.sum++;
          this.setLevel();
          break;
        case 'mixed':
          this.counterMixed += 1;
          this.sum++;
          this.setLevel();
          break;
        case 'paper':
          this.counterPaper += 1;
          this.sum++;
          this.setLevel();
          break;
        case 'metal':
          this.counterMetal += 1;
          this.sum++;
          this.setLevel();
          break;
        default:
          break;
      }
      this.isWaste = false;
    } else {
      alert('Unfortunately this is not the right place, try again!');
    }
  }
  //Show the elements in the boxes
  showBoxElements() {
    const box1 = document.querySelector('.box_plastic');
    const box2 = document.querySelector('.box_organic');
    const box3 = document.querySelector('.box_glass');
    const box4 = document.querySelector('.box_ewaste');
    const box5 = document.querySelector('.box_mixed');
    const box6 = document.querySelector('.box_metal');
    const box7 = document.querySelector('.box_paper');

    if (!this.isVisible) {
      this.isVisible = true;

      box1!.textContent = '';
      box2!.textContent = '';
      box3!.textContent = '';
      box4!.textContent = '';
      box5!.textContent = '';
      box6!.textContent = '';
      box7!.textContent = '';

      //Check the element in the wasteArray and push this for each box

      for (let i = 0; i < this.wasteArray.length; i++) {
        let wasteElement: HTMLParagraphElement | null =
          document.createElement('p');
        let lineBreak = document.createElement('br');
        if (this.wasteArray[i].element === 'plastic') {
          box1?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box1?.append(text);
        } else if (this.wasteArray[i].element === 'organic') {
          box2?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box2?.append(text);
        } else if (this.wasteArray[i].element === 'glass') {
          box3?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box3?.append(text);
        } else if (this.wasteArray[i].element === 'e-waste') {
          box4?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box4?.append(text);
        } else if (this.wasteArray[i].element === 'mixed') {
          box5?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box5?.append(text);
        } else if (this.wasteArray[i].element === 'metal') {
          box6?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box6?.append(text);
        } else if (this.wasteArray[i].element === 'paper') {
          box7?.append(lineBreak);
          let text = (wasteElement.textContent =
            this.wasteArray[i].name + ',' + ' ');
          box7?.append(text);
        }
      }
    } else {
      this.isVisible = false;
      box1!.textContent = '';
      box2!.textContent = '';
      box3!.textContent = '';
      box4!.textContent = '';
      box5!.textContent = '';
      box6!.textContent = '';
      box7!.textContent = '';
    }
  }

  //Generate a new waste from input text
  createNewWaste() {
    if (!this.newWasteVisible) {
      this.newWasteVisible = true;

      const divContainer = document.createElement('div');
      divContainer.classList.add('containerNewWaste');
      divContainer.style.backgroundColor = 'white';
      divContainer.style.borderRadius = '10px';
      divContainer.style.border = '1px solid black';
      divContainer.style.padding = '5px';
      divContainer.style.margin = '.5em 0 0 0';

      const title = document.createElement('h2');
      title.textContent = 'Insert a new element';

      const inputName = document.createElement('input');
      inputName.classList.add('name');
      inputName.placeholder = 'Insert name';
      inputName.maxLength = 20;

      const inputElement = document.createElement('input');
      inputElement.classList.add('element');
      inputElement.placeholder = 'Type element';

      const submit = document.createElement('button');
      submit.classList.add('submitNewWaste');
      submit.textContent = 'Submit';
      submit.addEventListener('click', () => {
        this.addNewWaste(inputName.value, inputElement.value);
      });

      const targetElement = document.querySelector('.inputPushBox');

      if (targetElement) {
        targetElement.appendChild(divContainer);
        divContainer.append(title, inputName, inputElement, submit);
      }
    } else {
      this.newWasteVisible = false;
      let containerNewWaste = document.querySelector('.containerNewWaste');
      containerNewWaste?.parentNode?.removeChild(containerNewWaste);
    }
  }
  //Check the data entered and push the new object into the waste array
  addNewWaste(inputName: string, inputElement: string) {
    const inputNameElement = document.querySelector(
      '.name'
    ) as HTMLInputElement;
    const inputElementElement = document.querySelector(
      '.element'
    ) as HTMLInputElement;

    if (inputName === '' || inputElement === '') {
      alert('Please enter a valid name or element');
    } else if (
      inputElement === 'plastic' ||
      inputElement === 'organic' ||
      inputElement === 'glass' ||
      inputElement === 'e-waste' ||
      inputElement === 'mixed' ||
      inputElement === 'metal' ||
      inputElement === 'paper'
    ) {
      const newObj = {
        name: inputName,
        element: inputElement,
      };

      const isObjPresent = this.waste.some(
        (item: any) =>
          item.name === newObj.name && item.element === newObj.element
      );
      //Check if the object is already present in the array
      if (isObjPresent) {
        alert('The item is already in the list');
      } else {
        this.waste.push(newObj);
        this.newWasteVisible = false;
        let containerNewWaste = document.querySelector('.containerNewWaste');
        containerNewWaste?.parentNode?.removeChild(containerNewWaste);
      }
      inputNameElement.value = '';
      inputElementElement.value = '';
    } else {
      alert(
        'please check the entered item (write everything in lowercase: plastic, organic, glass, e-waste, undifferentiated, metal, paper)'
      );
    }
  }
  //Remove an object from the array
  deleteWaste() {
    if (this.waste.length == 0) {
      alert('The rejection list is empty, add new ones');
    } else {
      this.waste.pop();
      alert('The last waste entered has been removed from the list');
    }
  }
  //Show all the elements present in the array on the screen
  watchList() {
    const divAppend = document.querySelector('.inputPushBox');
    let divContainer: HTMLElement | null = document.querySelector(
      '.watchListContainer'
    );

    if (!this.isList) {
      this.isList = true;

      if (!divContainer) {
        divContainer = document.createElement('div') as HTMLElement;
        divContainer.classList.add('watchListContainer');
        divContainer.style.backgroundColor = 'white';
        divContainer.style.borderRadius = '10px';
        divContainer.style.border = '1px solid black';
        divContainer.style.padding = '5px';
        divContainer.style.margin = '.5em 0 0 0';

        const p = document.createElement('p');
        const br = document.createElement('br');

        for (let i = 0; i < this.waste.length; i++) {
          const textNode = document.createTextNode(this.waste[i].name + ', ');
          divContainer?.appendChild(textNode);
          p.appendChild(br);
        }
      }
      divAppend?.appendChild(divContainer);
    } else {
      this.isList = false;

      if (divContainer) {
        divContainer?.parentNode?.removeChild(divContainer);
      }
    }
  }

  //Assigne one level each ten correct waste and reset the counter to end
  setLevel() {
    let sum =
      this.counterEwaste +
      this.counterGlass +
      this.counterMetal +
      this.counterOrganic +
      this.counterPaper +
      this.counterPlastic +
      this.counterMixed;

    if (sum === 10) {
      this.environmentalImpact = 'Medium';
      alert(
        'You have correctly disposed of 10 waste items, keep going you are on the right track!'
      );
    } else if (sum === 20) {
      this.environmentalImpact = 'Low';
      alert(
        `'We are making progress, 20 waste disposed of! You're almost at max level!'`
      );
    } else if (sum === 30) {
      this.environmentalImpact = 'Green Future!';
      this.sum = 0;

      this.counterEwaste = 0;
      this.counterGlass = 0;
      this.counterMetal = 0;
      this.counterOrganic = 0;
      this.counterPaper = 0;
      this.counterPlastic = 0;
      this.counterMixed = 0;
      this.wasteArray.length = 0;
      alert(
        'Congratulations, you have reached the maximum level! your environmental impact has significantly decreased, the earth thanks you!'
      );
    }
  }
}
