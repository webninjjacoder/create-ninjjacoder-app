import { PageSetup } from '@/components';

import { PageLayout } from '@mskcc/carbon-react';

export default function SubPage() {
  return (
    <PageSetup>
      <PageLayout layout='sarge' className='msk-main-page-container'>
        <div>subpage</div>
      </PageLayout>
    </PageSetup>
  );
}
