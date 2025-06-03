import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="jungheung-class-bener"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '해링턴플레이스' || text === '홍보영상' || text === '체크포인트'| text === '당첨자서류안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지친 하루를 마치고 가장 나에 가까운 본연의 모습으로 돌아와 누리는 프리미엄입니다.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전의 중심
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드 둔산 해링턴과 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                남다른 수준의 조망, 인프라, 교육, 문화가 담긴 랜드마크를 선사합니다.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                대전의 대표 랜드마크
                </div>
    
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    둔산 해링턴 플레이스
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수준 높은 생활, 첨단신도시내 착한 브랜드 아파트
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                대전의 중심에서 가장 높은 곳에 자리한 해링턴플레이스은 남다른 조망, 인프라, 교육, 문화가 한데 어우러진 프리미엄 주거 환경
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                엑스마트, 스타벅스, 미장초, 대전시청, 도심바람길숲공원(25년 예정) 등 원스톱특급인프라
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                미장지구 생활권의 다양한 편의시설을 갖추고 있습니다.
                </div>
            </>
        );
    }
};
