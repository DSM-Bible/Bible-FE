import { css } from "@emotion/react";
import { Font } from "../../Styles/Font";
import { RoutineDateSelector } from "../../Components/RoutineDropdown";
import { Routine } from "../../Components/Routine";
import { useEffect, useState } from "react";
import { CheckModal } from "../../Components/CheckModal";
import { DeleteRoutine, RoutineList } from "../../Apis/Routine";
import { RoutineListResponse } from "../../Apis/Routine/type";
import { useNavigate } from "react-router-dom";

export const RoutinePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<RoutineListResponse | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedDate) return;
    const getUserList = async () => {
      try {
        const response = await RoutineList(selectedDate);

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, [selectedDate]);

  const handleSelect = (id: string, isChecked: boolean) => {
    setSelectedIds((prev) =>
      isChecked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleDelete = async () => {
    try {
      await DeleteRoutine(selectedIds);
      setShowModal(false);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div css={Container}>
        <div css={TitleWrapper}>
          <Font text="루틴" kind="headLine1" color="basicTextColor" />
          <Font
            text="루틴을 등록하고, 관리해보세요"
            kind="bodyText1"
            color="disableGray"
          />
        </div>
        <RoutineDateSelector onChange={setSelectedDate} />
        <div css={Wrapper}>
          <Font
            text={`총 ${data?.data.length ?? 0}개의 루틴이 있습니다.`}
            kind="bodyText1"
            color="basicTextColor"
          />
          <div css={ButtonWrapper}>
            <Font
              text="추가"
              kind="bodyText1"
              color="basicTextColor"
              onClick={() => navigate("/createRoutine")}
            />
            <div onClick={() => setShowModal(true)}>
              <Font text="삭제" kind="bodyText1" color="defaultRed" />
            </div>
          </div>
        </div>
        {data?.data?.map((routine) => (
          <Routine
            key={routine.routineId}
            value={routine}
            onSelect={handleSelect}
          />
        ))}
      </div>
      {showModal && (
        <CheckModal
          title="루틴 삭제"
          content1="선택된 모든 루틴을 삭제하시겠습니까?"
          content2="삭제후 복구는 불가능합니다"
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 100px;
`;

const TitleWrapper = css`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 85px;
`;

const Wrapper = css`
  width: 320px;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = css`
  display: flex;
  gap: 15px;
`;
