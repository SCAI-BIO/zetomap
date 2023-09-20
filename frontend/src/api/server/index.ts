import { Server } from 'miragejs';
import { base, generic_2, question_1, knowledge, question } from '../data';

export function makeServer({ environment = 'development' } = {}) {
  const mirageServer = new Server({
    environment,

    routes() {
      this.urlPrefix = `${process.env.REACT_APP_API_URL}`;
      this.namespace = '/query';

      this.get('/base/', (schema, request) => {
        return base;
      });

      this.get('/neighbors/:id', (schema, request) => {
        const id = request.params.id;
        if (id === 'generic_2') return generic_2;
        if (id === 'question_1') return question_1;
        return [];
      });

      this.get('/search/:id', (schema, request) => {
        const id = request.params.id;
        if (id.toLowerCase() === 'knowledge') return knowledge;
        if (id.toLowerCase() === 'question') return question;
        return [];
      });

      // this.passthrough('http://api.nddks.k8s.bio.scai.fraunhofer.de/**');
      this.passthrough('https://www.scai.fraunhofer.de/**');
      this.passthrough('https://localhost:3001/**');
    },
  });

  return mirageServer;
}
