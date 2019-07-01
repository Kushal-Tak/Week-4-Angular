import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component  {

   lenShortest=0;
   lenLongest=0;
   articleCount=0;
   vowelsCount=0;
   wordCount=0;
   public textDetail;
   constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
     this.textDetail = this.formBuilder.group({
       myText: new FormControl('')
     });
   }

   count(data)
   {
      data.preventDefault();
      let input = this.textDetail.value.myText;
      //let input = data.target[0].value.toString();
      let inputArray = input.trim().split(" ");
      this.wordCount= inputArray.length;
       
      let articles = ['a','an','the'];
      let vowels = ['a','e','i','o','u'];
      
      this.lenShortest=0;
      this.lenLongest=0;
      this.articleCount=0;
      this.vowelsCount=0;
      this.wordCount=0;
      
      this.lenShortest= inputArray[0].length;

      inputArray.map((word)=>{
          console.log(word);

          //articles count
          if(articles.includes(word.toLowerCase()))
            this.articleCount++;

          //  vowels count
          let vowelCheck =word.split("");
          vowelCheck.map((char)=>{
                if(vowels.includes(char.toLowerCase()))
                    this.vowelsCount++;
          })

          // longest Word 
          if(this.lenLongest < word.length)
                this.lenLongest=word.length;

          // Shortest Word
          if(this.lenShortest > word.length &&  !(articles.includes(word.toLowerCase())))
                this.lenShortest=word.length;
      })
      
      
   }

  

}
