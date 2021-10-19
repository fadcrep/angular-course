import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  

  courses:Course[]= COURSES;
  startDate = new Date(2000,0,1);

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  ngAfterViewInit(){
  
    console.log(this.cards);
  }

  onCourseSelected(course:Course){
    console.log("App component- click event bubbled ...", course);
  }


}
