'use client';

import {
  Button,
  ButtonSet,
  MskTile,
  PageLayout,
  Stepper,
} from '@mskcc/carbon-react';
import {
  // @ts-ignore
  Breadcrumb,
  // @ts-ignore
  BreadcrumbItem,
} from '@mskcc/carbon-react';

export default function Page() {
  return (
    <>
      <PageLayout layout='sarge' className='pt-4'>
        <Breadcrumb>
          <BreadcrumbItem href='#'>My Task</BreadcrumbItem>
          <BreadcrumbItem href='#' isCurrentPage>
            Help Us Contact Your Family
          </BreadcrumbItem>
        </Breadcrumb>
      </PageLayout>
      <div className='my-8 py-8 bg-msk-cool-gray-10'>
        <PageLayout layout='sarge'>
          <h1 className='text-msk-h1'> Help Us Contact Your Family</h1>
        </PageLayout>
      </div>
      <PageLayout layout='sarge' className='pt-4'>
        <div className='grid lg:grid-cols-2 gap-8'>
          {Array.from({ length: 4 }, (_, i) => (
            <MskTile key={i}>
              <div className='p-4'>
                <Stepper
                  steps={[
                    { label: 'Step 1' },
                    { label: 'Step 2' },
                    { label: 'Step 3' },
                  ]}
                  activeStep={0}
                />
                <ButtonSet align='full' className='pt-4'>
                  <Button kind='tertiary'>Start</Button>
                </ButtonSet>
              </div>
            </MskTile>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
