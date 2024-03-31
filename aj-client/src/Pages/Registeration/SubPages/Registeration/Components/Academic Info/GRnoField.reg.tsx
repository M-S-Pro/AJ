import { Input, Tooltip} from "antd"
import RegLabelWrapper from "../LabelWrapper.reg"
import { Controller, useFormContext } from "react-hook-form"
import RequestLoading from "@/Global/Loaders/RequestLoding"
import { ArrowRight } from "lucide-react"
import {  useDebouncedCallback } from "use-debounce"
import useValidateGRno from "@/Hooks/Registeration/useValdiateGR"
import { FaBan } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
const GRnoRegisterationFormField = () => {
  const {control,getValues} = useFormContext()
  let {mutate,error:Error,data,isError,isSuccess}=useValidateGRno(getValues("GR"))
  const debounced = useDebouncedCallback(
    // function
    (value) => {
        
    mutate(value)
    },
    // delay in ms
    1500
  );
function GRSuffix(){
    return !isSuccess&&!isError?<RequestLoading size="20" stroke="2" dark/>:
    isError?
    <Tooltip title={Error.response.data.message}>
    <FaBan />
    </Tooltip>

    :
    <Tooltip title={data.message}>
    <MdVerified  />
    </Tooltip>
    
    
}

  return (
    <RegLabelWrapper className="w-[48%] relative" title="GR no">
    <Controller
  name="GRNO"
  rules={{required:"GRno is Required"}}
  control={control}
  render={({ field ,fieldState:{error}}) => (<>
  <Input  {...field} onChange={(e)=>{field.onChange(e);debounced(e.target.value)}} placeholder="189305" suffix={<GRSuffix/>} className="active:border-[var(--dark)]" />
  {
    isError&&
  <div className="absolute -bottom-12 w-full border border-[var(--primary)] rounded-md flex bg-[var(--bg)] shadow-lg p-2 px-4 gap-x-1 cursor-pointer">
  GRno. <b>{Error?.response.data?.payload?.GRNO}</b> <p>{Error?.response?.data?.payload?.FirstName}</p> already registered
  <ArrowRight size={16} className="self-end justify-self-end px-2"/>
  </div>
}
  {
    error && <p className="text-red-500 text-xs">{error.message}</p>
  }
  </>
  )}
/>
</RegLabelWrapper>
  )
}

export default GRnoRegisterationFormField