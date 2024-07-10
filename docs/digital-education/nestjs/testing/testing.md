# Testing in Nest
## Commands
```shell
## For unit tests
npm run test 

## For unit tests + collecting testing coverage
npm run test:cov

## For e2e tests
npm run test:e2e
```

## Descriptions
How are they different?
While unit tests focus on individual classes and functions…

e2e tests are great for high-level validation of the entire system. e2e testing covers the interaction of classes and modules at a more aggregate level -- closer to the kind of interaction that end-users will have with the production system.


# Test Nestjs Tips,Tricks and Best Practices

## 1. Unit Tests
- For unit tests In NestJS, it’s a common practice to keep the spec files in the same folder as the application source code files that they test.
- Each controller, provider, service, etc. should have its own dedicated test file.
- The test file extension must be (dot).spec.ts `*.spec.ts` (this is so that integrated test tooling can identify it as a test file with test suites).
````text
├── ec2-metadata
│   ├── ec2-metadata-v2.service.ts
│   ├── ec2-metadata.controller.spec.ts
│   ├── ec2-metadata.controller.ts
│   ├── ec2-metadata.service.spec.ts
│   └── ec2-metadata.service.ts 
````
- Unit test focus on individual classes and functions
## 2. End-to-End (e2e) Tests
- For e2e tests, these files are typically located in a dedicated `/test` directory by default.
- e2e tests are typically grouped into separate files by the feature or functionality that they test.
- The file extension must be (dot).e2e-spec.ts. `*.e2e-spec.ts`

```text
├── src ...
├── test
│   ├── app.e2e-spec.ts
```
- End to end tests are great for high level validation of the entire system.
- End to end testing covers the interaction of classes and models at a more aggregate level
- Closer to the kind of interaction the end users will have with the production system.
- As an application grows, it becomes hard to manually test the end to end behaviour of each API endpoint.
- Automated end to end tests help us ensure that the overall behaviour of the system is correct and meets project requirements.


## Inside a `.spec.ts` file
### Describe
Groups all unit tests than concern the Class/Function
### Setup Phase (beforeEach,beforeAll)

### Wrap-up Phase (afterEach,afterAll)

### It function
Represests an individual test.

### Running a single test

` npm run test:watch -- ec2-metadata.service`


## `@nestjs/testing`
```ts

import { Test, TestingModule } from '@nestjs/testing';
import { Ec2MetadataService } from './ec2-metadata.service';

describe('Ec2MetadataService', () => {
  let service: Ec2MetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ec2MetadataService],
    }).compile();

    service = module.get<Ec2MetadataService>(Ec2MetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

```




The test class is useful for providing an application execution context that essentially mocks the full Nest runtime.
It Gives you hooks that make it easy to manage class instances and da things like mocking adn overriding aspects of your application
The Test class has a creasteTestingModule method that takes a module metadata object as it arguments.
```ts
 const module: TestingModule = await Test.createTestingModule({
      providers: [Service],
    }).compile();
```

The same module we pass into our module decorators
The compile method bootstraps the module with its dependencies, similar to the way we bootstap our application in our `main.ts`
With `NestFactory.create()`
The compile method returns a testing module instance, which in turn gives us access to a few helpful methods
Once our testing module is compiled, we can retrieve any static instance declared within the module.

```ts
  service = module.get<Service>(Service);
```

By using the `get` method can retreive any static instance declared within the module.
This is a standard practice for testing that allow us to store and use this service within all of our tests that are a part of this describe block.


#### If you need to retreive Request Scoped or Transient Scoped providers, use the `resolve` method Here instead of `get`.
```ts
  service = module.resolve<Service>(Service);
```
------
When you create a service,controller or a class with `nest g ...`
- you always create a spec file with it.
- you can start TDD right away!
