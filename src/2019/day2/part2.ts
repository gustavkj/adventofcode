export function runIntcodeProgram(initialMemory: number[]): number[] {
  let currentAddress = 0;
  const memory = [...initialMemory];

  function add(address: number) {
    memory[memory[address + 3]] = memory[memory[address + 1]] + memory[memory[address + 2]];
  }

  function multiply(address: number) {
    memory[memory[address + 3]] = memory[memory[address + 1]] * memory[memory[address + 2]];
  }

  while (memory[currentAddress] !== 99) {
    if (memory[currentAddress] === 1) {
      add(currentAddress);
    } else if (memory[currentAddress] === 2) {
      multiply(currentAddress);
    } else {
      throw new Error(
        `Unknown Opcode: ${
          memory[currentAddress]
        } as address ${currentAddress}.\n\n${JSON.stringify(memory)}`,
      );
    }
    currentAddress += 4;
  }

  return memory;
}

function parseInput(input: string): number[] {
  return input.split(',').map(Number);
}

export function part2(input: string): number {
  const initialMemory = parseInput(input);

  let noun = 0;
  let verb = 0;

  initialMemory[1] = noun;
  initialMemory[2] = verb;

  while (runIntcodeProgram(initialMemory)[0] !== 19690720) {
    if (noun === 99 && verb === 99) {
      throw new Error('Maxed out');
    } else if (noun === 99) {
      verb += 1;
      noun = 0;
    } else {
      noun += 1;
    }

    initialMemory[1] = noun;
    initialMemory[2] = verb;
  }

  return 100 * noun + verb; // 7014
}