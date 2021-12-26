import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    
    render() {
        const { number,fixedNumber } = this.state;  // state를 조회할때는 this.state로 조회함
        return (
            <div>
                <h1>변경가능한 값{number}</h1>
                <h2> 고정된 값 : {fixedNumber}</h2>
                <button
                  // onClick를 통해 버튼이 클릭 되면 호출할 함수 지정
                    onClick = {() => {
                        // this.setState 를  사용하여 state 에 새로운 값을 넣을수 있음.
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출 되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;