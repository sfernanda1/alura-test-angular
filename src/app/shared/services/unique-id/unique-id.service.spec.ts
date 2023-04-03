import { UniqueServiceId } from './unique-id.service';

describe(UniqueServiceId.name, ()=> {
  let service : UniqueServiceId= null;
  beforeEach(()=>{
     service = new UniqueServiceId()
  })
  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}should not generate ids when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueServiceId.prototype.getNumberOfGenerateUniqueId.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');7
    expect(service.getNumberOfGenerateUniqueId()).toBe(2);
  });

  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should trow when called with empty`, () => {
    const emptyValues = [ null, undefined, '', '0', '1']
    emptyValues.forEach(emptyValue => {
      expect(() =>
        service.generateUniqueIdWithPrefix(emptyValue)).withContext(`Empty value: ${emptyValue}`).toThrow();
    });
  })
})

// toBetrue: sempre espera sempre um tipo literal
//toBe: Pra passar a referência do objeto tem que ser a mesma
//toBeTruthy: Mais genérico
