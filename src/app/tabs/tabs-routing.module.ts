import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'HomePage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../HomePage/HomePage.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'GlobalNumbers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../GlobalNumbers/GlobalNumbers.module').then(m => m.GlobalNumbersModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/HomePage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/HomePage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
