import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";


const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent}
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
