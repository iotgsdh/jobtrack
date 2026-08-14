"use client";

import { InputLabel } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { FormState } from "../types/form";
import { useActionState, useState } from "react";
import { COMPANY } from "@/constants/company";
import { edit } from "@/app/(main)/application-list/[id]/actions";
import { Application } from "@/types/application";
import { format } from "@/lib/utils/date";

const initialState: FormState = {
  error: null,
};

export function EditForm({ data }: { data: Application }) {
  const [state, action, pending] = useActionState(edit, initialState);
  const [companyName, setCompanyName] = useState(data.company_name);
  const applicationDate = format(data.created_at);
  const [status, setStatus] = useState(data.status);
  const date = data.interview_date ? format(data.interview_date) : null;
  const [interviewDate, setInterviewDate] = useState(
    date
      ? `${date.year}-${date.month}-${date.day}T${date.hour}:${date.minutes}`
      : "",
  );
  const [memo, setMemo] = useState(data.memo);

  return (
    <form action={action}>
      {/* id */}
      <input type="hidden" name="id" value={data.id} />
      {/* company name */}
      <div>
        <InputLabel htmlFor={COMPANY.name.en} label={COMPANY.name.ja} />
        <Input
          type="text"
          id={COMPANY.name.en}
          name={COMPANY.name.name}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      {/* application date */}
      <div>
        <span>応募日</span>
        <time
          dateTime={`${applicationDate!.year}-${applicationDate!.month}-${applicationDate!.day}`}
        >{`${applicationDate!.year}/${applicationDate!.month}/${applicationDate!.day}`}</time>
      </div>
      {/* status */}
      <div>
        <InputLabel htmlFor={COMPANY.status.en} label={COMPANY.status.ja} />
        <select
          name={COMPANY.status.en}
          id={COMPANY.status.en}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={status}>{status}</option>
          {status !== "応募済み" && <option value="応募済み">応募済み</option>}
          {status !== "一次面接" && <option value="一次面接">一次面接</option>}
          {status !== "二次面接" && <option value="二次面接">二次面接</option>}
          {status !== "最終面接" && <option value="最終面接">最終面接</option>}
          {status !== "内定" && <option value="内定">内定</option>}
          {status !== "不採用" && <option value="不採用">不採用</option>}
        </select>
      </div>
      {/* interview date */}
      <div>
        <InputLabel
          htmlFor={COMPANY.interviewDate.en}
          label={COMPANY.interviewDate.ja}
        />
        <input
          type="datetime-local"
          id={COMPANY.interviewDate.en}
          name={COMPANY.interviewDate.name}
          value={interviewDate}
          onChange={(e) => setInterviewDate(e.target.value)}
        />
      </div>
      {/* memo */}
      <div>
        <InputLabel htmlFor={COMPANY.memo.en} label={COMPANY.memo.ja} />
        <textarea
          name={COMPANY.memo.en}
          id={COMPANY.memo.en}
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        ></textarea>
      </div>
      {/* submit button */}
      <Button type="submit" label="保存" pending={pending} />
      {/* error message */}
      {state.error && <p>{state.error}</p>}
      {/* success message */}
      {state.success && <p>成功！</p>}
    </form>
  );
}
