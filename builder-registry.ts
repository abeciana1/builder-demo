import { Builder } from '@builder.io/react'
// import dynamic from 'next/dynamic'
import { MyFunComponent } from '@/app/_components/MyFunComponent'

Builder.registerComponent(MyFunComponent,
  {
    name: 'MyFunComponent',
    inputs: [{ name: 'text', type: 'string', defaultValue: 'Hello, Builder!' }],
    defaults: {
      //defaultStyles 
    },
    /* For more information on options: 
     * https://www.builder.io/c/docs/register-components-options
     */
  }
)

Builder.register('insertMenu', {
  name: 'My Components',
  items: [
    {name: 'MyFunComponent'}
  ]
})