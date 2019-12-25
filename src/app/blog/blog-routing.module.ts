import {RouterModule, Routes} from '@angular/router';
import {BlogCreateComponent} from './blog-create/blog-create.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {NgModule} from '@angular/core';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: 'newBlog',
    component: BlogCreateComponent
  },
  {
    path: 'blogDetail',
    component: BlogDetailComponent
  },
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'editBlog',
    component: BlogEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRouting {
}
