import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import {
  Button,
  Input,
  TextArea,
  FileUpload,
  Select,
} from '@video-cv/ui-components';
import { usePaystack } from '@video-cv/payment';

interface IForm {
  name: string;
  type: 'pinned' | 'upload';
}

const options = [
  { value: 'pinned', label: 'Pinned' },
  { value: 'upload', label: 'Upload' },
];

const UploadVideoModal = ({
  onClose,
  onSubmit = () => {
    ('');
  },
}: {
  onClose: (e: any) => void;
  onSubmit?: () => void;
}) => {
  const { register, handleSubmit, watch, setValue, control } = useForm<IForm>();
  const { payButtonFn } = usePaystack(
    () => {
      console.log('onSuccess callback');
    },
    () => {
      console.log('onFailure callback');
    },
    {
      amount: watch('type') === 'pinned' ? 10000 * 100 : 5000 * 100,
    }
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 lg:p-14 centered-modal-md rounded-lg"
    >
      <h3 className="text-center font-bold text-xl">Create Payment</h3>
      <div className="my-5 flex flex-col gap-5">
        <Input
          label="Payment"
          {...register('name')}
          // error={}
        />
        <Controller
          name="type"
          control={control}
          rules={{ required: 'Type is required' }}
          render={({ field }) => (
            <Select
              label="Type"
              id="type"
              placeholder="Select type"
              containerClass="flex-1"
              options={options}
              // onChange={(e: any) => console.log('e', e)}
              {...{ field }}
            />
          )}
        />
        <Button
          onClick={payButtonFn}
          className="w-full"
          label="Pay for video"
        />
      </div>
    </form>
  );
};

export default UploadVideoModal;
