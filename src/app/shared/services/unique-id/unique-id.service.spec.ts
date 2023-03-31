import { UniqueServiceId } from './unique-id.service';
describe(UniqueServiceId.name, ()=> {
  it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}should generate id when called with prefix`, () => {
    const service = new UniqueServiceId();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  })

})
