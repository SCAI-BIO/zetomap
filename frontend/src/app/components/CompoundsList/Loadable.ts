/** * * Asynchronously loads the component for
SolutionsList
* */
import { lazyLoad } from 'utils/loadable';

export const SolutionsList = lazyLoad(
  () => import('./index'),
  module => module.CompoundsList,
);
