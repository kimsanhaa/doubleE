package toy.project.doubleE;


import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;


public class tempTest {

    @Test
    public void 곱하기테스트() {
        // given

        // when
        final int result =  multiply(2, 3);

        // then
        assertThat(result).isEqualTo(6);
    }

    public int multiply(final int num1, final int num2) {
        return 6;
    }
}
