import Component from '@/components/component';
import PokemonPage from '@/registry/complex-component/page';
import { ExampleForm } from '@/registry/example-form/example-form';
import { HelloWorld } from '@/registry/hello-world/hello-world';

const Home = async () => (
  <div className='max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8'>
    <header className='flex flex-col gap-1'>
      <h1 className='text-3xl font-bold tracking-tight'>Custom Registry</h1>
      <p className='text-muted-foreground'>
        A custom registry for distributing code using shadcn.
      </p>
    </header>
    <main className='flex flex-col flex-1 gap-8'>
      <Component
        name='hello-world'
        description='A simple hello world component'
        code={`<HelloWorld />`}>
        <HelloWorld />
      </Component>

      <Component
        name='example-form'
        description='A contact form with Zod validation.'
        code={`<ExampleForm />`}>
        <ExampleForm />
      </Component>

      <Component
        name='complex-component'
        description='A complex component showing hooks, libs and components.'
        code={`<PokemonPage />`}>
        <PokemonPage />
      </Component>
    </main>
  </div>
);

export default Home;
